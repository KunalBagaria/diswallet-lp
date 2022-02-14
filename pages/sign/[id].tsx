import React from 'react';
import { DefaultHead } from '@/layouts/Head';
import { Navbar } from '@/layouts/Navbar';
import { Footer } from '@/layouts/Footer';
import { DefaultBlur } from '@/layouts/DefaultBlur';
import { Transaction } from '@/components/types';
import { SignTransaction } from '@/layouts/SignTransaction';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

interface Props {
  transaction: Transaction,
  error?: any
}

const Sign = function SignPage(props: Props) {
  const router = useRouter();

  React.useEffect(() => {
    if (props.error) {
      toast.error(props.error);
      router.push('/');
    }
  }, [props.error, router]);

  return (
    <>
      <DefaultHead />
      <DefaultBlur />
      <div className="main-padding">
        <Navbar />
        {!props.error && (
          <SignTransaction transaction={props.transaction} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Sign;

export async function getServerSideProps({
  query,
}: {
  query: {
    id: string
  }
}) {
  const jsonString = Buffer.from(query.id, 'base64').toString();
  try {
    const json = JSON.parse(jsonString);
    return {
      props: {
        transaction: json,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'Invalid JSON',
      },
    };
  }
}
