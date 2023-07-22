'use client';
import Banner from "@/components/banner";
import Styles from './page.module.css'

export default function Home(){
  const btnClickHandler = () =>{
    console.log("Hi! i am clicked")
  }

  return (
    <main className={Styles.container}>
      <Banner buttonText="View stores nearby" btnClickHandler={btnClickHandler}/>
    </main>
  )
}