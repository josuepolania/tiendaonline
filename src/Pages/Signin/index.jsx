
import { useContext, useState, useRef } from "react"
import { Link, Navigate } from "react-router-dom"
import Layout from "../../componentes/Layout"
import { ShoppingCartContext } from "../../Context"


function Signin() {

  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // has a ccount
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUseAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handLesSignin = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('signOut', stringifiedSignOut)
    context.setSignOut(false)

    return <Navigate to="/" />
  }

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)

    handLesSignin()

  }

  const renderLogin = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="font-medium">Email:</span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className="font-medium">Password:</span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link
          to="/">
          <button
            className="bg-black disabled:bg-black/400 text-white w-full rounded-lg py-3 mt-4 mb-2"
            onClick={() => handLesSignin()}
            disabled={!hasUseAnAccount}>
            log in
          </button>
        </Link>
        <div className="text-center">
          <a className='font text-xs underline-offset-4' href='/'>font my password</a>
        </div>
        <button
          className="border border-black disabled:text-black/40 rounded-lg mt-6"
          onClick={() => setView('create-user-info')}
          disabled={hasUseAnAccount}>
          sign up
        </button>
      </div>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="josue"
            className="rounded-lg border border-black placeholder:font-light
            placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
          <div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-light text-sm">your email:</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={parsedAccount?.email}
                placeholder="kshcsh@.com"
                className="rounded-lg border border-black
                 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
              />
              <div>
                <label htmlFor="password" className="font-light text-sm">password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  defaultValue={parsedAccount?.password}
                  placeholder="********"
                  className="rounded-lg border border-black
                 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                />
              </div>
            </div>
            <Link to="/">
              <button
                className="bg-black text-white w-full rounded-lg py-3 mt-4 mb-2"
                onClick={() => createAnAccount()}>
                create
              </button>
            </Link>
          </div>
        </div>
      </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {renderView()}
    </Layout>
  )
}

export default Signin

