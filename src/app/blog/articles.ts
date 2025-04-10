const articles = [
    {
      id: 1,
      title: "Storybook: Build UI Components in Isolation",
      content: `
  Storybook is a tool for developing UI components in isolation. It helps you build, test, and showcase components without running your full app.
  
  ### Setup
  
  \`\`\`bash
  npx sb init
  npm run storybook
  \`\`\`
  
  This will start the Storybook UI locally and let you develop your components independently.
  `,
      author: "Bimbim",
    },
    {
      id: 2,
      title: "Understanding React Server Components",
      content: `
  React Server Components let you build apps where parts of your UI are rendered on the server. This reduces the JS bundle size and improves load performance.
  
  ### Example
  
  \`\`\`tsx
  export default async function Page() {
    const data = await fetchData();
    return <div>{data.title}</div>;
  }
  \`\`\`
  
  Note: Server Components don't support interactivity like useState or event handlers.
  `,
      author: "Neo",
    },
    {
      id: 3,
      title: "Why Tailwind CSS is Taking Over Frontend",
      content: `
  Tailwind CSS is a utility-first CSS framework that allows rapid UI development.
  
  ### Example
  
  \`\`\`html
  <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click me
  </button>
  \`\`\`
  
  Tailwind removes the need for writing custom CSS in many cases.
  `,
      author: "Jane Doe",
    },
    {
      id: 4,
      title: "The Rise of Edge Functions in Next.js",
      content: `
  Edge functions in Next.js allow you to run server-side logic closer to users geographically.
  
  ### API Route with Edge Runtime
  
  \`\`\`ts
  export const config = {
    runtime: 'edge',
  };
  
  export default async function handler(req: Request) {
    return new Response("Hello from the edge!");
  }
  \`\`\`
  `,
      author: "Bimbim",
    },
    {
      id: 5,
      title: "Git Rebase vs Merge",
      content: `
  Both \`git merge\` and \`git rebase\` integrate changes from one branch into another, but they do it differently.
  
  ### Merge Example
  
  \`\`\`bash
  git checkout main
  git merge feature-branch
  \`\`\`
  
  ### Rebase Example
  
  \`\`\`bash
  git checkout feature-branch
  git rebase main
  \`\`\`
  
  Rebase creates a linear history. Merge preserves the full history tree.
  `,
      author: "Neo",
    }
  ];
  
  export default articles;
  