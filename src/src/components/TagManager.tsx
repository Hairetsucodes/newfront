// import React, { ReactNode, useEffect } from 'react';
//
// interface Props {
//     children: ReactNode;
// }
//
// export const TagManager = ({ children }: Props) => {
//     useEffect(() => {
//         (function(w,d,s,l,i){w[l]=w[l]||[]; w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0];var j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;var n=f.parentNode;n.insertBefore(j,f);})(window, document, 'script', 'dataLayer', 'GTM-KVT3CS27');
//     }, []);
//
//     return <>{children}</>
// };