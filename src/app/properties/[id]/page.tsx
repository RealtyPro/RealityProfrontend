"use client"
import { Footer } from "@/component/sharable/Footer";
import { Header } from "@/component/sharable/Header";
import { SinglePropertyPage } from "@/main-pages/single-property/SinglePropertyPage";
import Image from "next/image";
import { useState } from "react";

export default function SingleProperty() {


    return (
        <>
            <Header activeHeader={"mls-search"} />
            <SinglePropertyPage />




            <Footer />
        </>
    );
}