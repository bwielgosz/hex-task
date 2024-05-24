import { Button } from "./button"
import { Input } from "./input"

export function Newsletter({
  title,
  description,
  buttonText,
  placeholder,
}: {
  title: string
  description: string
  placeholder: string
  buttonText: string
}) {
  return (
    <>
      <p className="text-3xl font-bold">{title}</p>
      <p className="mt-1 text-lg text-gray-500">{description}</p>
      <div className="flex gap-2 mt-3">
        <Input className="h-11" placeholder={placeholder} />
        <Button size={"lg"}>{buttonText}</Button>
      </div>
    </>
  )
}
