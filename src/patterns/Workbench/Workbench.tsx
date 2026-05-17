import { joinClassNames } from "../../utils/class-name.ts";
import {
  mergeStyleAttributes,
  toStyleAttribute,
} from "../../utils/theme-style.ts";

type WorkbenchBreakpoint = "md" | "lg";
type WorkbenchSectionTag = "aside" | "div" | "main" | "nav" | "section";

export interface WorkbenchProps {
  children?: unknown;
  className?: string;
  collapseBelow?: WorkbenchBreakpoint;
  previewWidth?: string;
  sidebarWidth?: string;
  style?: string;
  [key: string]: unknown;
}

type WorkbenchSectionProps = {
  as?: WorkbenchSectionTag;
  children?: unknown;
  className?: string;
  style?: string;
  [key: string]: unknown;
};

function WorkbenchRoot(props: WorkbenchProps) {
  const {
    children,
    className,
    collapseBelow = "lg",
    previewWidth,
    sidebarWidth,
    style,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={joinClassNames("tc-workbench", className)}
      data-collapse-below={collapseBelow}
      style={mergeStyleAttributes(
        toStyleAttribute({
          "--tc-workbench-preview-width": previewWidth,
          "--tc-workbench-sidebar-width": sidebarWidth,
        }),
        style,
      )}
    >
      {children}
    </div>
  );
}

function WorkbenchSidebar(props: WorkbenchSectionProps) {
  return renderSection("tc-workbench-sidebar", props, "aside");
}

function WorkbenchToolbar(props: WorkbenchSectionProps) {
  return renderSection("tc-workbench-toolbar", props, "div");
}

function WorkbenchMain(props: WorkbenchSectionProps) {
  return renderSection("tc-workbench-main", props, "main");
}

function WorkbenchAside(props: WorkbenchSectionProps) {
  return renderSection("tc-workbench-aside", props, "aside");
}

function renderSection(
  baseClassName: string,
  props: WorkbenchSectionProps,
  fallbackTag: WorkbenchSectionTag,
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

export const Workbench = Object.assign(WorkbenchRoot, {
  Aside: WorkbenchAside,
  Main: WorkbenchMain,
  Sidebar: WorkbenchSidebar,
  Toolbar: WorkbenchToolbar,
});

export type { WorkbenchBreakpoint };
