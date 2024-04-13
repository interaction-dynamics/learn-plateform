---
title: Localization
nextjs:
  metadata:
    title: Localization
    description: Always use linters and formatters in your projects
---

By default, developers often develop their application in English. However, the application is used by people from different countries.
And a lot of people don't speak English. Millions or even billions of people won't be able to understand the application. Therefore, we need to localize our application to support different languages and regions.

In reality the localization, includes 3 parts: language, date and time, and currency. These 3 topics may differ from one country to another and require different approaches to solve them.

use the `Intl` object to format numbers, dates, and strings. However, this object is not supported by all browsers. To solve this problem, we can use the [Intl.js](

---

## Language

This is most complicated because it requires a lot of work to translate the application to different languages. It means every time you add a new feature, you need to translate it to all languages.

{% callout %}
Don't try to translate the application in all the languages of the world at the beginning. Start with one language and add more languages later based on your users target.
{% /callout %}

### Overview

Since some languages may differ slightly depending on the country, we need to support different regions for each language. For example, English is spoken in the United States, the United Kingdom, Australia, and many other countries. However, the English spoken in the United States is slightly different from the English spoken in the United Kingdom. Therefore, we need to support different regions for each language.

That's why we need to often use language tags identifying a language and a region for translations. For example, `en-US` is the language tag for English in the United States. `en-GB` is the language tag for English in the United Kingdom.

Besides, the translation is not only about the text, but also about the images, videos, and audios.

Finally, some language may be written from right to left. For example, Arabic is written from right to left. Therefore, we need to support this direction in our application.

So if we summarize, your application needs to:

- detect the language of the users (and update it)
- providing the right translation based on the language and region
- support right to left languages

### Detect the language

The first step is to detect the language of the user. You can use the [navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language) property to get the language of the user. The support is pretty good. If the user provides some text, you can also use [i18n.detectLanguage()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage) but the accuracy is limited.

{% callout %}
You would be tempted to check the location of the device based on the IP to find the language but since users may use VPN, the whole process is not reliable. Also even a user in the USA might not be able to speak english.
{% /callout %}

### Translation content

Providing the right translation based on the language and region is the most complicated part. All the translations systems in the front-end ecosystem are based on the [i18n](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n) concept. It means that you need to create a file for each language and use a key to identify the text. Then, you can use the key to get the text in the current language.

```js
// English
{
  "hello": "Hello",
  "world": "World"
}
// French
{
  "hello": "Bonjour",
  "world": "Monde"
}
```

Some services like [Lokalise](https://lokalise.com/) or [Crowdin](https://crowdin.com/) can help you to manage the translations.

### Support right to left

Finally, you need to support right to left languages. You can use the [dir](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attribute to specify the direction of the text.

The challenge for this part is to support both left to right and right to left languages in the same application and not add too much complexity in your style.

Some libraries like [mui](https://mui.com/), [tailwind](https://tailwindcss.com) or [bootstrap](https://getbootstrap.com/) can help you to support right to left languages faster.

## Date and Time

### Date format

Date and time differ from one country to another. For example, in the United States, the date format is `MM/DD/YYYY` while in France, the date format is `DD/MM/YYYY`. Also, some countries use a 12-hour clock while others use a 24-hour clock.

You shouldn't manage the date format yourself. Depending on the language, the date format may change a lot. So you should use a library.

The best API to format the date is the [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) API. It is supported by all browsers. It allows you to format the date based on the language and region. You can have a fully localized date using few options `long`, `short`, `numeric`, etc and it still give a good customization. Also since it uses native browser API, it is free weight.

```js
new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Australia/Sydney',
}).format(date)
// Expected output: "Sun, 20 December 2020"
```

However, it doesn't support all the possible formats. For example, you can't format the date like `DD/MM/YYYY`. So you may need to use a library like [date-fns](https://date-fns.org/). The library is quite heavy however. We recommend to use it only if you need to manage date formats that are not supported by the `Intl.DateTimeFormat` API. If you control the formats, you should use the `Intl.DateTimeFormat` API.

{% callout type="warning" %}
Don't use library [moment](https://momentjs.com/) to format the dates. The library is deprecated and it is not recommended by the community anymore.
{% /callout %}

### Timezone

Finally because of the timezones, the date and time may be different from one country to another. For example, if you are in France, the date and time will be different from the date and time in the United States.

Most of the libraries natively support the timezone. So you don't need to worry about it. Just check the documentation of the function you use to adapt the date and time based on the timezone.

The best practice is to manage date with [Date time string format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) at the UTC timezone aka like `2019-09-07T15:50:04:00Z` and to use [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

Reminder: when you insert a date in the datatbase, you should use the same Date time string format (including the hours, minutes and seconds).

## Currency

Displaying prices is tricky. It depends on both the language, the region and the currency. These are few examples:

| Currency  | Language | Price        |
| --------- | -------- | ------------ |
| US Dollar | en-US    | $1,000.00    |
| US Dollar | en-GB    | US$1,000.00  |
| US Dollar | fr-FR    | 1 000,00 $US |
| Euro      | en-US    | €1,000.00    |
| Euro      | en-GB    | €1,000.00    |
| Euro      | en-US    | 1 000,00 €   |

The logic includes different:

- currency symbols based on the language and region (for example, $ is automatically US dollar in the USA but should be suffixed with US in other countries to not be mistaken with Canadian dollar for example)
- currency position based on the language
- thousand and decimal separator based on the language

The best way to format prices is the native [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat):

```ts
const amout = 1000
const price = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
}).format(amout)
```
