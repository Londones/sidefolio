import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const handleLanguageChange = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const getFlagEmoji = (locale: string | undefined) => {
    switch (locale) {
      case "en":
        return "🇺🇸";
      case "fr":
        return "🇫🇷";
      default:
        return "🇫🇷";
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleLanguageChange}>
      {getFlagEmoji(locale)}
    </Button>
  );
}
