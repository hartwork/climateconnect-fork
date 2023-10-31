import parseHtml from "html-react-parser";
import Head from "next/head";
import React, { useContext } from "react";
import getTexts from "../../../public/texts/texts";
import UserContext from "../context/UserContext";
import WideLayout from "../layouts/WideLayout";

export default function WebflowPage({
  bodyContent,
  headContent,
  pageKey,
  className,
  hideFooter,
  noHeader,
}: any) {
  const { locale } = useContext(UserContext);
  const texts = getTexts({ page: "navigation", locale: locale });
  const extractScripts = (htmlString: any) => {
    const scriptTagPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const matches = htmlString.match(scriptTagPattern);
    console.log("++++", matches);
    return matches || [];
  };
  const cssLinks = headContent.match(/<link[^>]*?href=["'](.*?\.css)["'][^>]*?>/g);

  return (
    <>
      <Head>
        {/* Other head content */}
        {cssLinks &&
          cssLinks.map((link, index) => <link key={index} rel="stylesheet" href={link} />)}
        {extractScripts(headContent).map((src, index) => (
          <script key={index} dangerouslySetInnerHTML={{ __html: src }}></script>
        ))}
        {parseHtml(headContent)}
      </Head>
      <WideLayout
        rootClassName={className}
        title={texts[pageKey]}
        isStaticPage
        //TODO(unused) hideHeadline
        noSpaceBottom
        hideFooter={hideFooter}
        noHeader={noHeader}
      >
        <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
      </WideLayout>
    </>
  );
}
