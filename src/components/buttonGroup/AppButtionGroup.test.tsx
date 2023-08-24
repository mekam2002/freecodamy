import React from "react"
import { render, fireEvent } from "@testing-library/react"
import AppButtonGroup from "./AppButtonGroup"
describe("AppButtonGroup", () => {
  const tabLabel = [
    { key: "key1", label: "Label 1" },
    { key: "key2", label: "Label 2" },
    { key: "key3", label: "Label 3" }
  ]
  const onChangeMock = jest.fn()
  it("renders correctly", () => {
    const { container } = render(
      <AppButtonGroup
        tabLabel={tabLabel}
        value="key1"
        onChange={onChangeMock}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it("calls onChange when a button is clicked", () => {
    const { getByText }: any = render(
      <AppButtonGroup
        tabLabel={tabLabel}
        value="key1"
        onChange={onChangeMock}
      />
    )
    fireEvent.click(getByText("Label 2"))
    expect(onChangeMock).toHaveBeenCalledWith("key2")
  })
  it("does not call onChange when the same button is clicked", () => {
    const { getByText } = render(
      <AppButtonGroup
        tabLabel={tabLabel}
        value="key1"
        onChange={onChangeMock}
      />
    )
    fireEvent.click(getByText("Label 1"))
    expect(onChangeMock).not.toHaveBeenCalled()
  })
  it("does not call onChange when no button is selected", () => {
    const { getByRole } = render(
      <AppButtonGroup tabLabel={tabLabel} value="" onChange={onChangeMock} />
    )
    fireEvent.click(getByRole("button", { name: "Label 1" }))
    expect(onChangeMock).not.toHaveBeenCalled()
  })
})
