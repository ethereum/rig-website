<div align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <a href="https://rig.ethereum.org"><img alt="ethereum logo" src="./public/large-logo.svg" alt="rig.ethereum.org" width="420"></a>
  <h1>Robust Incentives Group - [RIG]</h1>
</div>

## Stack

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [Prettier](https://prettier.io/) - Code formatter
- [shadcn/ui](https://ui.shadcn.com/) - UI components built with Radix UI and Tailwind CSS

## Getting started with local development

First, this repo uses `pnpm` as a package manager. If you don't have it installed, see [Installing pnpm](https://pnpm.io/installation).

Then, run the following command to install the dependencies:

```bash
pnpm install
```

Next, you can run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding a new post, paper or talk

All posts, papers or talks are added as individual markdown files, each containing metadata in the front matter of the file.

### File Structure

Content should be placed in the following directories:

- Posts: `/public/posts/`
- Papers: `/public/papers/`
- Talks: `/public/talks/`

### File Naming

Name your file using a kebab-case slug that describes the content, for example:

- `ethereum-research-update.md`
- `cross-shard-transaction-protocol.md`

The slug in the filename will be used in the URL path. Lowercase is not required, but encouraged for consistency. Avoid special characters and spaces in the filename.

### Front Matter Requirements

Each content type requires specific front matter fields:

#### Posts

```markdown
---
title: "Your Post Title"
authors:
  - Author Name 1
  - Author Name 2
tags:
  - tag1
  - tag2
datePublished: 2025-04-20
---

Place links to the external resources here.

Optionally, you may also add any additional markdown comments here.
```

#### Papers

```markdown
---
title: "Your Paper Title"
authors:
  - Author Name 1
  - Author Name 2
tags:
  - tag1
  - tag2
datePublished: 2025-04-20
publicationVenue: "Conference or Journal Name"
---

Place links to the external resources here.

Optionally, you may also add any additional markdown comments here.
```

#### Talks

```markdown
---
title: "Your Talk Title"
authors:
  - Author Name 1
  - Author Name 2
location: "Conference Name, City, Country"
startDate: 2025-04-20
endDate: 2025-04-21 # Optional for multi-day events
---

Place links to the external resources here.

Optionally, you may also add any additional markdown comments here.
```

### Available Tags

Tags must be chosen from the predefined list in `lib/constants.ts` (TAGS object). Use the _key_ for each, ie. `mev` instead of `Maximal Extractable Value`.

### Available Names

To take advantage of the user profiles found in `data/profiles.ts`, you should use names that match the `id` for that contributor, or the exact same `name` as in the `name` field. This will ensure that the author links to the correct profile page.

Any author name may be used as a fallback, which will render as-is without an avatar.

### Content Format

After the front matter, write your content using standard Markdown syntax. You can include:

- Headings (## Heading 2, ### Header 3 etc.) \*
- Text formatting (**bold**, _italic_)
- Links [text](url)
- Images ![alt text](/path/to/image.png)
- Code blocks (`language code`)
- Lists, blockquotes, tables, etc.

\*Note: Avoid using Heading 1 (H1) as it is reserved for the main title of the page (no page should have more than one H1). Use H2 for section titles and H3 for subsections.

Images used in content should be stored in the `/public/images/` directory with appropriate subdirectories for organization.
