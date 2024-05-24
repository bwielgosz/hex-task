import { notFound } from "next/navigation"
import data from "../../data.json"
import Image from "next/image"

export default function DetailsPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const tileData = data.tiles.find((tile) => tile.id == parseInt(id, 10))
  if (!tileData) notFound()

  return (
    <section>
      <h1 className="text-4xl">{tileData.title}</h1>
      <h2 className="text-2xl mt-2">{tileData.description}</h2>
      <Image
        src={tileData.image}
        width={200}
        height={200}
        alt="tile image"
        className="mt-8"
      />
    </section>
  )
}
