import { test, expect } from "@playwright/experimental-ct-react"
import { Newsletter } from "./newsletter"

test.use({ viewport: { width: 500, height: 500 } })

test("should fill data from props properly", async ({ mount }) => {
  const component = await mount(
    <Newsletter
      title="title"
      buttonText="submit"
      description="description"
      placeholder="placeholder"
    />
  )
  await expect(component.locator("p").first()).toContainText("title")
  await expect(component.locator("p").nth(1)).toContainText("description")
  await expect(component.locator("input")).toHaveAttribute(
    "placeholder",
    "placeholder"
  )
})
