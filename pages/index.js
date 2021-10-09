import { useTheme } from "next-themes";
import { styled } from "../stitches.config";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Wrapper>
      <h1>Current theme is {theme}</h1>
      <Inline>
        <Button onClick={() => setTheme("light")}>Light theme</Button>
        <Button onClick={() => setTheme("dark")}>Dark theme</Button>
      </Inline>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Inline = styled("div", {
  display: "flex",
  gap: "16px",
  padding: "12px 0",
});

const Button = styled("button", {
  all: "unset",
  backgroundColor: "$foreground",
  color: "$background",
  fontWeight: 600,
  padding: "12px",
  borderRadius: "7px",
});
