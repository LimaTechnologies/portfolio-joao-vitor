"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const equipamentos = [
  {
    nome: "Canon EOS Rebel T7",
    foto: "https://www.loja.canon.com.br/wcsstore/CDBCatalogAssetStore/01_EOS_T7_NOVAFOTO.jpg",
    compra: "https://www.loja.canon.com.br/pt/canonbr/eos-rebel-t7plus-ef-s-18-55-is-ii-usm",
    categoria: "Câmera",
  },
  {
    nome: "Tripé Profissional MTG-3018",
    foto: "https://http2.mlstatic.com/D_NQ_NP_2X_633593-MLU78430741724_082024-F.webp",
    compra: "https://produto.mercadolivre.com.br/MLB-tripé-profissional-camera-celular-180cm-mtg-3018-suporte",
    categoria: "Suporte",
  },
  {
    nome: "Monitor Samsung Odyssey G5 34''",
    foto: "https://images.samsung.com/is/image/samsung/p6pim/br/lc34g55twwlmzd/gallery/br-gaming-lc34g55twwlmzd-lc--g--twwlxzd-541893149?$684_547_PNG$",
    compra: "https://www.samsung.com/br/monitors/gaming/odyssey-g5-34-inch-165hz-curved-ultra-wqhd-lc34g55twwlmzd/",
    categoria: "Monitor",
  },
  {
    nome: "Suporte Monitor Articulado",
    foto: "https://http2.mlstatic.com/D_NQ_NP_925497-MLB87070784605_072025-O.webp",
    compra:
      "https://produto.mercadolivre.com.br/MLB-3622788359-suporte-em-aco-para-monitor-normal-curvo-articulado-17-a-32-_JM?quantity=1&variation_id=182237707937",
    categoria: "Suporte",
  },
  {
    nome: "Teclado HyperX Alloy RGB",
    foto: "https://http2.mlstatic.com/D_NQ_NP_944449-MLA50305077491_062022-O.webp",
    compra:
      "https://www.mercadolivre.com.br/teclado-gamer-hyperx-alloy-qwerty-hyperx-lineal-aqua-ingls-us-cor-preto-com-luz-rgb/p/MLB19156893?pdp_filters=item_id:MLB3829629349",
    categoria: "Periférico",
  },
  {
    nome: "Mouse Logitech G502 X Plus",
    foto: "https://http2.mlstatic.com/D_NQ_NP_759446-MLU75807943998_042024-O.webp",
    compra:
      "https://www.mercadolivre.com.br/mouse-gamer-sem-fio-logitech-g502-x-plus-rgb-lightsync-preto/p/MLB19786823?pdp_filters=item_id:MLB4980384640",
    categoria: "Periférico",
  },
  {
    nome: "Headset HyperX Cloud Stinger 2",
    foto: "https://http2.mlstatic.com/D_NQ_NP_818022-MLB80790221638_112024-O.webp",
    compra:
      "https://produto.mercadolivre.com.br/MLB-3921137715-headset-hyperx-cloud-stinger-2-wireless-gaming-_JM?quantity=1&variation_id=182361631600",
    categoria: "Áudio",
  },
  {
    nome: "Suporte Notebook Stand",
    foto: "https://http2.mlstatic.com/D_NQ_NP_668254-MLB44616303111_012021-O.webp",
    compra:
      "https://produto.mercadolivre.com.br/MLB-1768561551-suporte-de-laptop-notebook-stand-preto-14-ate-17-polegadas-_JM?quantity=1&variation_id=73284580534",
    categoria: "Suporte",
  },
]

export default function Equipment() {
  return (
    <motion.section
      className="mb-32"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.1 }}
    >
      <h2 className="text-3xl md:text-4xl font-thin text-center mb-16">Equipamentos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipamentos.map((item, index) => (
          <Card
            key={index}
            className="bg-gray-900/20 border-gray-800 hover:bg-gray-900/40 transition-all duration-500 group overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="aspect-[4/3] overflow-hidden bg-gray-800">
                <Image
                  src={item.foto || "/placeholder.svg"}
                  alt={item.nome}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=300&width=400&text=" + encodeURIComponent(item.nome)
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs text-gray-400 uppercase tracking-wide bg-gray-800 px-2 py-1 rounded">
                    {item.categoria}
                  </span>
                </div>
                <h3 className="font-light text-lg mb-4">{item.nome}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-0 h-auto font-light"
                  onClick={() => window.open(item.compra, "_blank")}
                >
                  Ver produto
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  )
}
