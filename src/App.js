import React from "react";

// https://www.i18next.com/translation-function/essentials
// https://www.i18next.com/translation-function/objects-and-arrays

export default ({ i18n, t }) => {
  return (
    <div className="App">
      <h1>{t && t("title", { username: "Chris" })}</h1>
      <p>
        <strong>{t && t("subtext")}</strong>
        <br />
        <br />
        {t && t("details.description")}
      </p>
      <ul>
        {t &&
          t("details.features", { returnObjects: true }).map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
      </ul>
      <button onClick={() => i18n.changeLanguage("en")}>ENGLISH</button>
      <button onClick={() => i18n.changeLanguage("es")}>SPANISH</button>
      <button onClick={() => i18n.changeLanguage("fr")}>FRENCH</button>
    </div>
  );
};
