# PLAYBOOK

## References

- [Integrate Google reCAPTCHA v2 With Next.js 13](https://medium.com/@danielcracbusiness/integrate-google-recaptcha-v2-with-next-js-13-in-under-10-minutes-f25a286bb19e)

## Generate

```sh
$ npx create-react-app@latest $SITENAME
$ cd $SITENAME
$ pnpm i
```

## Remove

```sh
$ git rm public/*
```

## What do we want?

As `src/components/*.tsx` we want these:

- MaxWidthWrapper: the page is wrapped in here `layout.tsx`
- Navbar: the translucent menu
- Intro: a cover photo and a "hello"
- About: a wordy yet brief introduction
- Skills: a list of skills
- Experience: a wordy yet brief summary of 2019 onward
- Contact: email form

- Footer: colophon and social links `layout.tsx`

## Basics

- Remove contents of `src/app/page.tsx`, to be replaced with `<MaxWidthWrapper>...`.
- Create `src/lib/utils.ts` and run `pnpm i clsx tailwind-merge`
