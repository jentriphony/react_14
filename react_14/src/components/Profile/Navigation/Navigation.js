import classes from './Navigation.module.css'

import Link from './Link/Link'



const Navigation = () => {



  return (

    <aside>



      <section>
        <h3 className={ classes.title }>
          navigation
        </h3>

        <ul className={ classes.navigation }>
          <Link href='#' innerText='link_1' />

          <Link href='#' innerText='link_2' />

          <Link href='#' innerText='link_3' />

          <Link href='#' innerText='link_4' />

          <Link href='#' innerText='link_5' />

          <Link href='#' innerText='link_6' />

          <Link href='#' innerText='link_7' />

          <Link href='#' innerText='link_8' />
        </ul>
      </section>



    </aside>

  )



}



export default Navigation