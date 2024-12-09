import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
        <div className="p-4 text-white flex">
            {/* <div>
                <h1 className="text-2xl font-bold mb-4 text-red-400">Privacy Policy</h1>
                <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                <p className="mb-4">
                    Protecting your personal data is of utmost importance to us. This Privacy Policy explains
                    how we collect, use, and protect your information in compliance with the General Data Protection Regulation (GDPR)
                    and other relevant data protection laws in Germany.
                </p>
                <h2 className="text-xl font-semibold mb-3">Data Collection and Usage</h2>
                <p className="mb-4">
                    We collect personal data for authentication purposes using Firebase. This includes your
                    email address, display name, and profile picture when you sign in with Google. We also use localStorage to maintain
                    your session and prevent re-authentication when the page is refreshed.
                </p>
                <h2 className="text-xl font-semibold mb-3">Legal Basis</h2>
                <p className="mb-4">
                    We process your data in accordance with Art. 6 (1) lit. b GDPR, which allows the processing
                    of data required for the performance of a contract or pre-contractual measures. By signing in, you consent to this
                    processing under Art. 6 (1) lit. a GDPR.
                </p>
                <h2 className="text-xl font-semibold mb-3">Third-Party Services / Dienste von Drittanbietern</h2>
                <p className="mb-4">
                    This website uses Firebase, a service provided by Google LLC. Firebase handles authentication
                    and may store your data in data centers located in the European Union. For more information, please refer to Firebase's
                    privacy policy.
                </p>
                <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
                <div className="mb-4">
                    Under the GDPR, you have the following rights:
                    <ul className="list-disc ml-6">
                        <li>The right to access your data (Art. 15 GDPR)</li>
                        <li>The right to rectify inaccurate data (Art. 16 GDPR)</li>
                        <li>The right to erase your data (Art. 17 GDPR)</li>
                        <li>The right to restrict processing (Art. 18 GDPR)</li>
                        <li>The right to data portability (Art. 20 GDPR)</li>
                        <li>The right to object to data processing (Art. 21 GDPR)</li>
                    </ul>
                </div>
                <h2 className="text-xl font-semibold mb-3">Data Storage Duration / Speicherdauer</h2>
                <p className="mb-4">
                    Your data is stored only as long as necessary to fulfill its purpose or as required by law.
                    If you log out or delete your account, your data is immediately deleted.
                </p>
                <h2 className="text-xl font-semibold mb-3">Contact</h2>
                <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                    <br />
                    <strong>Email: </strong><a href="https://linktr.ee/ColdByDefault" rel="noopener noreferrer"
                    target="_blank" className="text-blue-200 underline">LinkTree</a>
                </p>
            </div> */}
            <div>
                <h1 className="text-2xl font-bold mb-4 text-red-400">Datenschutzerklärung</h1>
                <h2 className="text-xl font-semibold mb-3">Einleitung</h2>
                <p className="mb-4">
                    Der Schutz Ihrer persönlichen Daten ist uns besonders wichtig. Diese Datenschutzerklärung
                    erläutert, wie wir Ihre Informationen gemäß der Datenschutz-Grundverordnung (DSGVO) und anderen relevanten
                    Datenschutzgesetzen in Deutschland erheben, verwenden und schützen.
                </p>
                <h2 className="text-xl font-semibold mb-3">Datenerhebung und Nutzung</h2>
                <p className="mb-4">
                    Wir erheben personenbezogene Daten zu Authentifizierungszwecken mithilfe von Firebase.
                    Dazu gehören Ihre E-Mail-Adresse, Ihr Anzeigename und Ihr Profilbild, wenn Sie sich mit Google anmelden. Außerdem
                    verwenden wir localStorage, um Ihre Sitzung aufrechtzuerhalten und eine erneute Authentifizierung beim Aktualisieren
                    der Seite zu vermeiden.
                </p>
                <h2 className="text-xl font-semibold mb-3">Rechtsgrundlage</h2>
                <p className="mb-4">
                    Wir verarbeiten Ihre Daten gemäß Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten
                    erlaubt, die zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen erforderlich sind. Durch die Anmeldung stimmen
                    Sie dieser Verarbeitung gemäß Art. 6 Abs. 1 lit. a DSGVO zu.
                </p>
                <h2 className="text-xl font-semibold mb-3">Dienste von Drittanbietern</h2>
                <p className="mb-4">
                    Diese Website verwendet Firebase, einen Dienst von Google LLC. Firebase übernimmt die
                    Authentifizierung und kann Ihre Daten in Rechenzentren in der Europäischen Union speichern. Weitere Informationen
                    finden Sie in der Datenschutzerklärung von Firebase.
                </p>
                <h2 className="text-xl font-semibold mb-3">Ihre Rechte</h2>
                <div className="mb-4">
                    Gemäß der DSGVO haben Sie folgende Rechte:
                    <ul className="list-disc ml-6">
                        <li>Das Recht auf Zugang zu Ihren Daten (Art. 15 DSGVO)</li>
                        <li>Das Recht auf Berichtigung falscher Daten (Art. 16 DSGVO)</li>
                        <li>Das Recht auf Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                        <li>Das Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                        <li>Das Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                        <li>Das Recht auf Widerspruch gegen die Datenverarbeitung (Art. 21 DSGVO)</li>
                    </ul>
                </div>
                <h2 className="text-xl font-semibold mb-3">Speicherdauer</h2>
                <p className="mb-4">
                    Ihre Daten werden nur so lange gespeichert, wie es zur Erfüllung ihres Zwecks oder gesetzlich
                    vorgeschrieben ist. Wenn Sie sich abmelden oder Ihr Konto löschen, werden Ihre Daten umgehend gelöscht.
                </p>
                <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
                <p className="mb-4">
                    Wenn Sie Fragen oder Bedenken zu dieser Datenschutzerklärung haben, kontaktieren Sie uns
                    bitte unter:
                    <br />
                    <strong>Email: </strong><a href="https://linktr.ee/ColdByDefault" rel="noopener noreferrer"
                    target="_blank" className="text-blue-200 underline">LinkTree</a>
                </p>
            </div>
        </div>
    </>
  );
};

export default PrivacyPolicy;
