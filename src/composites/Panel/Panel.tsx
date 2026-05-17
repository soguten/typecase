import { joinClassNames } from "../../utils/class-name.ts";

type PanelPadding = "none" | "sm" | "md" | "lg";
type PanelTone = "default" | "subtle" | "strong";
type PanelTag = "article" | "aside" | "div" | "section";
type PanelSectionTag = "div" | "footer" | "header" | "section";

type PanelSectionProps = {
  as?: PanelSectionTag;
  children?: unknown;
  className?: string;
  style?: string;
  [key: string]: unknown;
};

export interface PanelProps {
  as?: PanelTag;
  children?: unknown;
  className?: string;
  padding?: PanelPadding;
  style?: string;
  tone?: PanelTone;
  [key: string]: unknown;
}

export interface PanelBodyProps extends PanelSectionProps {
  scroll?: boolean;
}

function PanelRoot(props: PanelProps) {
  const {
    as = "section",
    children,
    className,
    padding = "md",
    style,
    tone = "default",
    ...rest
  } = props;
  const Tag = as;

  return (
    <Tag
      {...rest}
      className={joinClassNames("tc-panel", className)}
      data-padding={padding}
      data-tone={tone}
      style={style}
    >
      {children}
    </Tag>
  );
}

function PanelHeader(props: PanelSectionProps) {
  return renderSection("tc-panel-header", props);
}

function PanelTitle(props: PanelSectionProps) {
  return renderSection("tc-panel-title", props, "div");
}

function PanelDescription(props: PanelSectionProps) {
  return renderSection("tc-panel-description", props, "div");
}

function PanelActions(props: PanelSectionProps) {
  return renderSection("tc-panel-actions", props);
}

function PanelBody(props: PanelBodyProps) {
  const {
    as = "div",
    children,
    className,
    scroll = false,
    style,
    ...rest
  } = props;
  const Tag = as;

  return (
    <Tag
      {...rest}
      className={joinClassNames("tc-panel-body", className)}
      data-scroll={scroll ? "true" : "false"}
      style={style}
    >
      {children}
    </Tag>
  );
}

function PanelFooter(props: PanelSectionProps) {
  return renderSection("tc-panel-footer", props, "footer");
}

function renderSection(
  baseClassName: string,
  props: PanelSectionProps,
  fallbackTag: PanelSectionTag = "div",
) {
  const {
    as = fallbackTag,
    children,
    className,
    style,
    ...rest
  } = props;
  const Tag = as;

  return (
    <Tag
      {...rest}
      className={joinClassNames(baseClassName, className)}
      style={style}
    >
      {children}
    </Tag>
  );
}

export const Panel = Object.assign(PanelRoot, {
  Actions: PanelActions,
  Body: PanelBody,
  Description: PanelDescription,
  Footer: PanelFooter,
  Header: PanelHeader,
  Title: PanelTitle,
});

export type { PanelPadding, PanelTone };
