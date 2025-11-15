import Head from 'next/head'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'

export default function Folders({ siteConfig }: { siteConfig: any }) {
  const { query } = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar siteConfig={siteConfig} />
        <div className="mx-auto w-full max-w-5xl py-4 sm:p-4">
          <nav className="mb-4 flex items-center justify-between space-x-3 px-4 sm:px-0 sm:pl-1">
            <Breadcrumb query={query} />
            <SwitchLayout />
          </nav>
          <FileListing query={query} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  // Import siteConfig on the server side to get runtime environment variable values
  const siteConfig = require('../../config/site.config')
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Pass runtime config values to the client
      siteConfig: {
        title: siteConfig.title,
        icon: siteConfig.icon,
        baseDirectory: siteConfig.baseDirectory,
        links: siteConfig.links,
        email: siteConfig.email,
        protectedRoutes: siteConfig.protectedRoutes,
      },
    },
  }
}
