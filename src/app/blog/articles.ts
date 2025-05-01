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
      id: 3,
      title: "Debugging: A Comprehensive Guide for Developers",
      content: `
      <article className="prose max-w-4xl mx-auto">
      <h1>What is Debugging?</h1>

      <p>
        You are following a coding tutorial. You write every line exactly as the
        tutor does, but your program behaves differently. You check your code
        again, delete and retype the last few lines, but the issue stays.
        Frustrated, you visit the GitHub repo linked in the video—and there it
        is. A missing semicolon.
      </p>
      <p>
        That moment is called <strong>debugging</strong>—the process of finding
        and fixing errors (bugs) in your code.
      </p>
      <p>In this article, we will break down the following:</p>
      <ul>
        <li>What is Debugging?</li>
        <li>Types of Errors</li>
        <li>Types of Debugging</li>
        <li>Remote Debugging</li>
        <li>Five steps of debugging</li>
        <li>Debugging technique</li>
        <li>Debugging tools</li>
        <li>How to prevent bugs</li>
        <li>Conclusion</li>
      </ul>

      <section>
        <h2>1. What is Debugging?</h2>
        <p>
          Debugging means identifying and fixing errors in a program. Programs
          are sets of instructions computers follow. When errors interrupt those
          instructions, debugging helps you get things working again.
        </p>
        <p>
          The term "bug" has an old origin. In the 1940s, Admiral Grace Hopper
          and her team found a literal moth inside a computer, which caused a
          malfunction. Since then, errors in programs have been called bugs.
        </p>
      </section>

      <section>
        <h2>2. Types of Errors</h2>
        <p>Errors in code come in several forms:</p>
        <ul>
          <li>
            <strong>Syntax Errors:</strong> Breaking the rules of the
            programming language, like missing punctuation or typos.
          </li>
          <li>
            <strong>Logical Errors:</strong> The program runs but behaves
            incorrectly due to flawed logic.
          </li>
          <li>
            <strong>Runtime Errors:</strong> The program starts but crashes
            during execution. These may depend on external conditions or
            incorrect inputs.
          </li>
        </ul>
        <p>
          You'll encounter more error types as you code, and you'll learn how to
          handle them with error handling techniques.
        </p>
      </section>

      <section>
        <h2>3. Types of Debugging</h2>
        <p>Debugging can be:</p>
        <ul>
          <li>
            <strong>Reactive Debugging:</strong> Fixing bugs after they appear.
          </li>
          <li>
            <strong>Proactive Debugging:</strong> Writing extra code to detect
            potential issues early. This helps prevent problems before they
            occur.
          </li>
        </ul>
        <p>
          Proactive debugging is part of defensive programming—writing code with
          error handling in mind.
        </p>
      </section>

      <section>
        <h2>4. Remote Debugging</h2>
        <p>
          Sometimes, programs run on cloud servers or remote machines. You can not
          debug them locally. Remote debugging allows you to find and fix bugs
          in software running somewhere else, using special tools or network
          connections.
        </p>
      </section>

      <section>
        <h2>5. The Five Steps of Debugging</h2>
        <p>Here is a simple process to follow when debugging:</p>
        <ol>
          <li>
            <strong>Gather Information:</strong> Check error messages and
            outputs. Understand what is going wrong and when it happens.
          </li>
          <li>
            <strong>Isolate the Error:</strong> Narrow down the problem area.
            Comment out code or use print statements to find where the bug
            starts.
          </li>
          <li>
            <strong>Identify the Error:</strong> Form a hypothesis. Think about
            what is causing the problem—wrong data types? A missing condition?
          </li>
          <li>
            <strong>Fix the Error:</strong> Test your hypothesis. If your fix
            does not work, try another idea until the error disappears.
          </li>
          <li>
            <strong>Test and Document:</strong> Run the program again. If the
            bug is gone, document your solution for future reference.
          </li>
        </ol>
      </section>

      <section>
        <h2>6. Debugging Techniques</h2>
        <p>Use these methods to debug faster:</p>
        <ul>
          <li>
            <strong>Comment Out Code:</strong> Disable sections temporarily to
            isolate bugs.
          </li>
          <li>
            <strong>Print Statements:</strong> Log values to trace what your
            code is doing.
          </li>
          <li>
            <strong>Use a Debugger:</strong> Most IDEs have tools that help step
            through your code line-by-line.
          </li>
          <li>
            <strong>Set Breakpoints:</strong> Pause the code at specific points
            to inspect variables and logic.
          </li>
          <li>
            <strong>Write Tests:</strong> Unit tests and integration tests can
            catch issues before runtime.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Debugging Tools</h2>
        <p>Your tools depend on your programming language and environment:</p>
        <ul>
          <li>
            <strong>Debuggers:</strong> Built-in tools in IDEs like VS Code,
            PyCharm, or Android Studio.
          </li>
          <li>
            <strong>Version Control:</strong> Git helps you compare versions,
            track changes, and roll back bugs.
          </li>
          <li>
            <strong>Testing Frameworks:</strong> Tools like Mocha, Jest, or
            PyTest help automate error checking.
          </li>
          <li>
            <strong>Browser Dev Tools:</strong> Use F12 or Cmd+Opt+I to open dev
            tools in Chrome or Firefox.
          </li>
          <li>
            <strong>Rubber Duck Debugging:</strong> Explain your code to an
            object or person—it helps clarify your logic.
          </li>
          <li>
            <strong>AI Tools:</strong> ChatGPT, GitHub Copilot, and SonarQube
            assist with code analysis and fixes.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. How to Prevent Bugs</h2>
        <p>
          You will not write perfect code, but you can reduce bugs with these
          habits:
        </p>
        <ul>
          <li>
            <strong>Write Tests:</strong> Detect problems early and cover edge
            cases.
          </li>
          <li>
            <strong>Write Pseudo-code:</strong> Plan your logic in plain
            language first.
          </li>
          <li>
            <strong>Keep Code Simple:</strong> Simpler code is easier to read,
            test, and debug.
          </li>
          <li>
            <strong>Use Modules:</strong> Split large programs into smaller,
            reusable files.
          </li>
        </ul>
      </section>

      <section>
        <h2>9. Conclusion</h2>
        <p>
          Debugging is a core skill for developers. You have learned what
          debugging is, how to spot and fix bugs, different types of errors,
          useful tools, and tips to prevent bugs. With time, you will get better
          at finding and fixing bugs quickly—and maybe even enjoy the
          challenge.
        </p>
      </section>
    </article>
  `,
      author: "C.Christian",
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
  