import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Cards";
import Hero from "./Hero";
import bgEid from "../assets/img/img-eid.jpg";

function Home() {
    const cardProps = [
      {
        id: 1,
        title: "عيد أضحى مبارك",
        price: "مجانا",
        description:
          "أتمنى لك ولعائلتك عيد أضحى سعيد ومبارك، أعاده الله عليكم باليمن والبركات. تقبل الله منا",
      },
      {
        id: 2,
        title: "بطاقة معايدة بمناسبة عيد الأضحى",
        price: "مجانا",
        description:
          "في هذا اليوم المبارك، أتمنى لك عيدًا مليئًا بالفرح والسعادة. أدعو الله أن يتقبل منا ومنكم الأعمال الصالحة ويجعلنا من الذاكرين له والمشكورين. عيدكم مبارك وكل عام وأنتم بخير.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        id: 3,
        title: "تهانينا بمناسبة عيد الأضحى",
        price: "مجانا",
        description:
          "نهنئكم بحلول عيد الأضحى المبارك، أعاده الله علينا وعليكم بالخير واليمن والبركات. نتمنى أن يكون هذا العيد فرصة للتواصل مع الأهل والأحباب، ولقضاء أوقات ممتعة ومفيدة. عيدكم مبارك وكل عام وأنتم بخير.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        id: 4,
        title: "بطاقة عيد سعيد",
        price: "مجانا",
        description:
          "يحل علينا عيد الأضحى السعيد، فلنفرح ونبتهج معًا. أتمنى لك عيدًا مليئًا بالسعادة والسلام، وأن يتحقق كل ما تتمناه. لنتذكر في هذا العيد أهمية العطاء والتضحية ومشاركة الفرحة مع الآخرين. عيدكم مبارك وكل عام وأنتم بخير.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        id: 5,
        title: "تهانينا بمناسبة عيد الأضحى المبارك",
        price: "مجانا",
        description:
          "نهنئكم بحلول عيد الأضحى المبارك، أعاده الله عليكم بالخير واليمن والبركات. نتمنى أن يكون هذا العيد فرصة للتقرب إلى الله وللتواصل مع الأهل والأصدقاء. تقبل الله منا ومنكم صالح الأعمال، وكل عام وأنتم بخير.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        id: 5,
        title: "عيد مبارك وأضحى سعيد",
        price: "مجانا",
        description:
          "بمناسبة عيد الأضحى المبارك، أتمنى لكم أيامًا مليئة بالفرح والأمل والسلام. أدعو الله أن يجعل هذا العيد فرصة للتقرب إليه ولتعزيز روابط المحبة والتآخي بيننا جميعًا. عيدكم مبارك وكل عام وأنتم بخير.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
    ];
  return (
    <>
      <Navbar />
      <Hero />
      <Card cardProps={cardProps} id="cards"/>
      <Footer />
    </>
  );
}

export default Home;
