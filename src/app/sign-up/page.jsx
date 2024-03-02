import Header from '../components/Header/Header'
import SigninForm from '../components/Forms/SignUpForm'

export default function SignUpPage() {
  return (
    <>
        <Header/>
        <section className='flex flex-col items-center justify-center pt-[144px] pb-[171px] desktop:pt-[150px] desktop:pb-[251px]'>
          <SigninForm/>
        </section>  
    </>
  )
}
