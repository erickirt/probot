export function successView({ name }: { name?: string | undefined }): string {
  return `<!DOCTYPE html>
<html lang="en" class="height-full" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Setup ${name || "Your App"} | built with Probot</title>
    <link rel="icon" href="/probot/static/probot-head.png">
    <link rel="stylesheet" href="/probot/static/primer.css">
  </head>
  <body class="height-full bg-gray-light">
    <div class="d-flex flex-column flex-justify-center flex-items-center text-center height-full">
      <img src="/probot/static/robot.svg" alt="Probot Logo" width="100" class="mb-6">
      <div class="box-shadow rounded-2 border p-6 bg-white">
        <div class="text-center">
          <h1 class="alt-h3 mb-2">Congrats! You have successfully installed your app!
            <br>
            Checkout <a href="https://probot.github.io/docs/webhooks/">Receiving webhooks</a> and <a href="https://probot.github.io/docs/github-api/">Interacting with GitHub</a> to learn more!</h1>
        </div>
      </div>

      <div class="mt-4">
        <h4 class="alt-h4 text-gray-light">Need help?</h4>
        <div class="d-flex flex-justify-center mt-2">
          <a href="https://probot.github.io/docs/" class="btn btn-outline mr-2">Documentation</a>
          <a href="https://github.com/probot/probot/discussions" class="btn btn-outline">Discuss on GitHub</a>
        </div>
      </div>
    </div>
  </body>
</html>`;
}
