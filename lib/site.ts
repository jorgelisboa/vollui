import type { StaticImageData } from "next/image";

import iguatemiPortoAlegre from "@/public/clients/iguatemi-porto-alegre.png";
import iguatemiEsplanada from "@/public/clients/iguatemi-esplanada.png";
import iguatemiRioPreto from "@/public/clients/iguatemi-sao-jose-do-rio-preto.png";
import tambore from "@/public/clients/tambore-jaguariuna.png";
import galleria from "@/public/clients/galleria-shopping.png";
import praiaDeBelas from "@/public/clients/praia-de-belas.png";
import vertice from "@/public/clients/vertice.png";
import vivara from "@/public/clients/vivara.png";
import zimba from "@/public/clients/zimba.png";

import bosch from "@/public/partners/bosch.png";
import axis from "@/public/partners/axis.png";
import pelco from "@/public/partners/pelco.png";
import akuvox from "@/public/partners/akuvox.png";
import hikvision from "@/public/partners/hikvision.png";
import dahua from "@/public/partners/dahua.png";
import vivotek from "@/public/partners/vivotek.png";
import intelbras from "@/public/partners/intelbras.png";
import digifort from "@/public/partners/digifort.png";
import dGuard from "@/public/partners/d-guard.png";
import situator from "@/public/partners/situator.png";
import controlId from "@/public/partners/control-id.png";
import honeywell from "@/public/partners/honeywell.png";

import leitorFacial from "@/public/tech/leitor-facial.png";
import leituraDePlaca from "@/public/tech/leitura-de-placa.png";
import videoPorteiro from "@/public/tech/video-porteiro.png";
import intertravamento from "@/public/tech/intertravamento.png";
import leitorBiometrico from "@/public/tech/leitor-biometrico.png";
import tagVeicular from "@/public/tech/tag-veicular.png";
import tagPedestre from "@/public/tech/tag-pedestre.png";
import camerasIp from "@/public/tech/cameras-ip.png";
import leitorProximidade from "@/public/tech/leitor-proximidade.png";

type Logo = { name: string; logo: StaticImageData };

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Sobre", href: "#sobre" },
  { label: "Integradores", href: "#integradores" },
  { label: "Contato", href: "#contato" },
];

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site da Vollui e gostaria de uma cotação.",
);

export const contacts = [
  {
    name: "David Dowalite Velasco",
    phone: "(19) 99844-4748",
    whatsapp: `https://wa.me/5519998444748?text=${whatsappMessage}`,
  },
  {
    name: "Duaibes Junior",
    phone: "(11) 98131-0697",
    whatsapp: `https://wa.me/5511981310697?text=${whatsappMessage}`,
  },
];

export const primaryWhatsapp = contacts[0].whatsapp;

export const businessHours = "Seg a sex, das 8h às 18h";

export const clients: Logo[] = [
  { name: "Iguatemi Porto Alegre", logo: iguatemiPortoAlegre },
  { name: "Vivara", logo: vivara },
  { name: "Tamboré Jaguariúna", logo: tambore },
  { name: "Galleria Shopping", logo: galleria },
  { name: "Iguatemi Esplanada", logo: iguatemiEsplanada },
  { name: "Praia de Belas", logo: praiaDeBelas },
  { name: "Vértice", logo: vertice },
  { name: "Iguatemi São José do Rio Preto", logo: iguatemiRioPreto },
  { name: "Zimba Empreendimentos", logo: zimba },
];

export const partners: Logo[] = [
  { name: "Bosch", logo: bosch },
  { name: "Hikvision", logo: hikvision },
  { name: "Intelbras", logo: intelbras },
  { name: "Axis Communications", logo: axis },
  { name: "Dahua", logo: dahua },
  { name: "Honeywell", logo: honeywell },
  { name: "Pelco", logo: pelco },
  { name: "Control iD", logo: controlId },
  { name: "Vivotek", logo: vivotek },
  { name: "Akuvox", logo: akuvox },
  { name: "Digifort", logo: digifort },
  { name: "D-Guard", logo: dGuard },
  { name: "Situator", logo: situator },
];

export const partnerCategories = [
  {
    title: "CFTV (câmeras)",
    brands: [
      "Bosch",
      "Axis",
      "Pelco",
      "Dahua",
      "Vivotek",
      "Intelbras",
      "Hikvision",
      "Digifort",
      "D-Guard",
    ],
  },
  {
    title: "Controle de acesso",
    brands: [
      "Hikvision",
      "Intelbras",
      "Situator",
      "Control iD",
      "Nice/Linear",
      "Let Me In",
      "Bosch",
      "Honeywell",
    ],
  },
  {
    title: "Alarme de intrusão",
    brands: ["Bosch", "Honeywell", "DSC", "Intelbras", "JFL"],
  },
  {
    title: "Detecção de incêndio",
    brands: ["Bosch", "Honeywell", "Intelbras", "Ascael", "Deltafire"],
  },
];

export const extraServices = [
  "Controle de acesso",
  "Alarmes",
  "Suporte técnico",
  "Manutenção preventiva e corretiva",
  "Manutenção de sistemas já instalados",
];

export const technologies = [
  {
    name: "Leitor facial",
    description: "Abertura automática de portas para moradores e visitantes.",
    image: leitorFacial,
  },
  {
    name: "Leitura de placas (LPR)",
    description: "O portão abre sozinho para os veículos cadastrados.",
    image: leituraDePlaca,
  },
  {
    name: "Vídeo porteiro IP",
    description: "Interfone com câmera e abertura remota de portões.",
    image: videoPorteiro,
  },
  {
    name: "Módulo de intertravamento",
    description: "Impede que as duas portas da eclusa abram ao mesmo tempo.",
    image: intertravamento,
  },
  {
    name: "Leitor biométrico",
    description: "Acesso pela digital para moradores e visitantes.",
    image: leitorBiometrico,
  },
  {
    name: "Tag veicular",
    description: "Tag passiva para controle e abertura do portão de veículos.",
    image: tagVeicular,
  },
  {
    name: "Tag e cartão para pedestres",
    description: "Controle e abertura do portão de pedestres.",
    image: tagPedestre,
  },
  {
    name: "Câmeras IP de alta resolução",
    description: "Imagem nítida de dia e de noite, mesmo com pouca luz.",
    image: camerasIp,
  },
  {
    name: "Leitor de proximidade",
    description: "Acesso por cartão ou tag, sem contato.",
    image: leitorProximidade,
  },
];

export const services = [
  {
    title: "Monitoramento remoto",
    description:
      "Uma central acompanha câmeras, alarmes e acessos em tempo real e age rápido quando algo foge do normal.",
  },
  {
    title: "Portaria virtual",
    description:
      "Visitantes e prestadores são atendidos por uma central remota, sem precisar de porteiro no local.",
  },
  {
    title: "Portaria autônoma",
    description:
      "Moradores entram com facial, biometria ou tag, e o acesso de visitantes é liberado remotamente.",
  },
  {
    title: "PABX IP",
    description:
      "Interfonia virtual para condomínios e associações, com comunicação digital entre unidades e portaria.",
  },
];

export const steps = [
  {
    title: "Entendimento",
    description:
      "Conversamos com você para entender a necessidade, a rotina do local e o investimento disponível.",
  },
  {
    title: "Projeto",
    description:
      "Desenhamos um projeto de segurança sob medida, pensado para resolver exatamente o seu problema.",
  },
  {
    title: "Implementação",
    description:
      "Nossa equipe instala, configura e entrega tudo funcionando, com suporte depois da entrega.",
  },
];

export const segmentOptions = ["Condomínio", "Residência", "Empresa"] as const;
