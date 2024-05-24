import data from "./data.json"
import Image from "next/image"
import { buttonVariants } from "@repo/design-system/button.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/design-system/card.tsx"
import Link from "next/link"

export default function Page(): JSX.Element {
  return (
    <main className="flex-1 mt-8 flex flex-col items-center px-4">
      <section className="grid grid-cols-3 gap-4">
        {data.tiles.map((tile) => (
          <Card key={tile.id}>
            <CardHeader>
              <CardTitle>{tile.title}</CardTitle>
              <CardDescription>{tile.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={tile.image}
                width={200}
                height={200}
                alt="tile image"
              />
            </CardContent>
            <CardFooter>
              <Link
                href="/"
                className={buttonVariants({ className: "w-full" })}
              >
                {tile.buttonText}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  )
}
