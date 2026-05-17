import { Locales, RenderMode, Route } from "mainz";
import { TypecaseDocPageBase } from "../../lib/TypecaseDocPageBase.tsx";

@Route("/components/workbench")
@RenderMode("ssg")
@Locales("en")
export class WorkbenchPage extends TypecaseDocPageBase {
  protected override readonly slug = "workbench";
}
