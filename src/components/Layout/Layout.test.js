import React from "react"
import renderer from "react-test-renderer"
import {PureLayout as Layout} from "./Layout"

describe("Layout", () =>
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          title: "Audrey",
        },
      },
    }
    const tree = renderer.create(<Layout data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
