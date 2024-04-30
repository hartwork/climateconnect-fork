import parseHtml from "html-react-parser";
import Head from "next/head";
import React, { useContext } from "react";
import getTexts from "../../../public/texts/texts";
import UserContext from "../context/UserContext";
import WideLayout from "../layouts/WideLayout";
import { DevLinkProvider } from "../../../devlink/DevLinkProvider";

export default function WebflowPage({
  children
}: any) {
  return (
    <>
      <WideLayout
        isStaticPage
        //TODO(unused) hideHeadline
        noSpaceBottom
      >
        <DevLinkProvider>
          {children}
        </DevLinkProvider>
      </WideLayout>
    </>
  );
}
