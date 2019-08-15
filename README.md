## Breadcrumbz

---

Easy React Breadcrumbs

### Installation

---

```cmd
npm install breadcrumbz

#or

yarn add breadcrumbz

```

### Usage

---

```javascript
import { BreadCrumbs } from 'breadcrumbz';

// Links for the Breadcrumbs

const links = [
  {
    link: 'http://github.com/',
    title: 'Home'
  },
  {
    link: 'http://google.com/',
    title: 'Profile',
    tintColor: '#3098'
  },
  {
    link: 'http://twitter.com/',
    title: 'Bookmarks',
    tintColor: 'red'
  }
];

<BreadCrumbs crumbs={links} />;
```

## License

---

Breadcrumbz is licensed under the MIT License.
