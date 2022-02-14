import crypto from 'crypto';
import util from 'util';

const randomBytes = util.promisify(crypto.randomBytes);
const pbkdf2 = util.promisify(crypto.pbkdf2);

const cryptAlgo = 'aes-256-gcm';
const digestAlgo = 'sha512';
const iterations = 1000;
const keyLength = 32;
const ivLength = 16;
const saltLength = 64;
const tagLength = 16;
const tagIndex = saltLength + ivLength;
const ciphertextIndex = tagIndex + tagLength;

const getKey = (secret: Buffer, salt: Buffer) => (
  pbkdf2(secret, salt, iterations, keyLength, digestAlgo)
);

export async function encrypt(plaintext: Buffer, secret: Buffer) {
  if (plaintext == null) throw new TypeError('plaintext must not be null/undefined');
  if (secret == null) throw new TypeError('secret must not be null/undefined');
  const iv = await randomBytes(ivLength);
  const salt = await randomBytes(saltLength);
  const key = await getKey(secret, salt);
  const cipher = crypto.createCipheriv(cryptAlgo, key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([salt, iv, tag, encrypted]);
}

export async function decrypt(encrypted: Buffer, secret: Buffer) {
  if (encrypted == null) throw new TypeError('encrypted must not be null/undefined');
  if (secret == null) throw new TypeError('secret must not be null/undefined');
  const salt = encrypted.slice(0, saltLength);
  const iv = encrypted.slice(saltLength, tagIndex);
  const tag = encrypted.slice(tagIndex, ciphertextIndex);
  const ciphertext = encrypted.slice(ciphertextIndex);
  const key = await getKey(secret, salt);
  const decipher = crypto.createDecipheriv(cryptAlgo, key, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}
