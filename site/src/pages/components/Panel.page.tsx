import { Locales, RenderMode, Route } from "mainz";
import { TypecaseDocPageBase } from "../../lib/TypecaseDocPageBase.tsx";

@Route("/components/panel")
@RenderMode("ssg")
@Locales("en")
export class PanelPage extends TypecaseDocPageBase {
  protected override readonly slug = "panel";
}
