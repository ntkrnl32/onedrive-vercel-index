/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 * All configuration values can be overridden by environment variables, which take priority.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'spencer@spwoo.onmicrosoft.com',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  // Or you can just use an absolute URL to an image of your liking.
  // e.g. https://example.com/my-icon.png
  icon: process.env.ICON || '/icons/128.png',

  // [OPTIONAL] Favicon for the site. Can be a path under /public or an absolute URL.
  // Default uses the conventional /favicon.ico already present in /public.
  favicon: process.env.FAVICON || '/favicon.ico',

  // Prefix for KV Storage
  kvPrefix: process.env.KV_PREFIX || '',

  // The name of your website. Present alongside your icon.
  title: process.env.SITE_TITLE || "Spencer's OneDrive",

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: process.env.BASE_DIRECTORY || '/Public',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: parseInt(process.env.MAX_ITEMS) || 100,

  // [OPTIONAL] Protected file extensions - files with these extensions require authentication via .password file.
  // Place a .password.<ext> file in the same directory with the password hash to protect files with that extension.
  // Provide an array of extensions (without the dot), e.g., ['tmp', 'sensitive', 'private']
  protectedFileExtensions: (() => {
    try {
      return process.env.PROTECTED_FILE_EXTENSIONS ? JSON.parse(process.env.PROTECTED_FILE_EXTENSIONS) : []
    } catch {
      return []
    }
  })(),

  // [OPTIONAL] Protected file regex pattern - files matching this regex require authentication via .password.regex file.
  // Place a .password.regex file in the same directory with the password hash to protect matching files.
  // Provide a regex pattern as a string, e.g., '^\\..*' to protect all dotfiles, or '.*\\.tmp$|.*\\.bak$' for multiple patterns.
  // Leave empty string to disable regex filtering.
  protectedFileRegex: process.env.PROTECTED_FILE_REGEX || '',

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: process.env.GOOGLE_FONT_SANS || 'Inter',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: process.env.GOOGLE_FONT_MONO || 'Fira Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: (() => {
    try {
      return process.env.GOOGLE_FONT_LINKS ? JSON.parse(process.env.GOOGLE_FONT_LINKS) : ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap']
    } catch {
      return ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap']
    }
  })(),

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer: process.env.FOOTER ||
    'Powered by <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">onedrive-vercel-index</a>. Made with ❤ by SpencerWoo.',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: (() => {
    try {
      return process.env.PROTECTED_ROUTES ? JSON.parse(process.env.PROTECTED_ROUTES) : ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route']
    } catch {
      return ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route']
    }
  })(),

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: process.env.EMAIL || 'mailto:spencer.wushangbo@gmail.com',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: (() => {
    try {
      return process.env.LINKS ? JSON.parse(process.env.LINKS) : [
        {
          name: 'GitHub',
          link: 'https://github.com/ntkrnl32/onedrive-vercel-index',
        },
      ]
    } catch {
      return [
        {
          name: 'GitHub',
          link: 'https://github.com/ntkrnl32/onedrive-vercel-index',
        },
      ]
    }
  })(),

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: process.env.DATETIME_FORMAT || 'YYYY-MM-DD HH:mm:ss',
}

// Debug mode: Output configuration details during build
if (process.env.DEBUG_CONFIG === 'true') {
  console.log('\n=== Site Configuration Debug Info ===')
  console.log('Environment Variables:')
  console.log('  NEXT_PUBLIC_USER_PRINCIPLE_NAME:', process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME ? '✓ Set' : '✗ Not set (using default)')
  console.log('  ICON:', process.env.ICON ? '✓ Set' : '✗ Not set (using default)')
  console.log('  FAVICON:', process.env.FAVICON ? '✓ Set' : '✗ Not set (using default)')
  console.log('  KV_PREFIX:', process.env.KV_PREFIX ? '✓ Set' : '✗ Not set (using default)')
  console.log('  SITE_TITLE:', process.env.SITE_TITLE ? '✓ Set' : '✗ Not set (using default)')
  console.log('  BASE_DIRECTORY:', process.env.BASE_DIRECTORY ? '✓ Set' : '✗ Not set (using default)')
  console.log('  MAX_ITEMS:', process.env.MAX_ITEMS ? '✓ Set' : '✗ Not set (using default)')
  console.log('  PROTECTED_FILE_EXTENSIONS:', process.env.PROTECTED_FILE_EXTENSIONS ? '✓ Set' : '✗ Not set (using default)')
  console.log('  PROTECTED_FILE_REGEX:', process.env.PROTECTED_FILE_REGEX ? '✓ Set' : '✗ Not set (using default)')
  console.log('  GOOGLE_FONT_SANS:', process.env.GOOGLE_FONT_SANS ? '✓ Set' : '✗ Not set (using default)')
  console.log('  GOOGLE_FONT_MONO:', process.env.GOOGLE_FONT_MONO ? '✓ Set' : '✗ Not set (using default)')
  console.log('  GOOGLE_FONT_LINKS:', process.env.GOOGLE_FONT_LINKS ? '✓ Set' : '✗ Not set (using default)')
  console.log('  FOOTER:', process.env.FOOTER ? '✓ Set' : '✗ Not set (using default)')
  console.log('  PROTECTED_ROUTES:', process.env.PROTECTED_ROUTES ? '✓ Set' : '✗ Not set (using default)')
  console.log('  EMAIL:', process.env.EMAIL ? '✓ Set' : '✗ Not set (using default)')
  console.log('  LINKS:', process.env.LINKS ? '✓ Set' : '✗ Not set (using default)')
  console.log('  DATETIME_FORMAT:', process.env.DATETIME_FORMAT ? '✓ Set' : '✗ Not set (using default)')
  console.log('\nFinal Configuration Values:')
  console.log('  userPrincipalName:', module.exports.userPrincipalName)
  console.log('  icon:', module.exports.icon)
  console.log('  favicon:', module.exports.favicon)
  console.log('  kvPrefix:', module.exports.kvPrefix || '(empty)')
  console.log('  title:', module.exports.title)
  console.log('  baseDirectory:', module.exports.baseDirectory)
  console.log('  maxItems:', module.exports.maxItems)
  console.log('  protectedFileExtensions:', JSON.stringify(module.exports.protectedFileExtensions))
  console.log('  protectedFileRegex:', module.exports.protectedFileRegex || '(empty)')
  console.log('  googleFontSans:', module.exports.googleFontSans)
  console.log('  googleFontMono:', module.exports.googleFontMono)
  console.log('  googleFontLinks:', JSON.stringify(module.exports.googleFontLinks))
  console.log('  footer:', module.exports.footer.substring(0, 50) + '...')
  console.log('  protectedRoutes:', JSON.stringify(module.exports.protectedRoutes))
  console.log('  email:', module.exports.email)
  console.log('  links:', JSON.stringify(module.exports.links))
  console.log('  datetimeFormat:', module.exports.datetimeFormat)
  console.log('=== End Site Configuration ===\n')
}
