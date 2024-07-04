import React from 'react';
import SignupForm from '@/components/SignupForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';



const Signup = async () => {
  const session = await getServerSession(authOptions)

  if (session) redirect("/blog")
  return (
    <div className='bg-black'>
      <SignupForm />
    </div>
  )
}

export default Signup
