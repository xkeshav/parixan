const resourceItem = ({ name, length }) => `
    <li>
      <a href="${name}">/${name}</a>
      <sup>${length ? `${length}x` : 'object'}</sup>
    </li>
  `;

const resourceList = ({ db }) => `
    <ul>
      ${Object.keys(db)
        .map((name) =>
          resourceItem({
            name,
            length: Array.isArray(db[name]) && db[name].length,
          })
        )
        .join('')}
    </ul>
  `;

const noResources = () => `<p>No resources found. create file under json folder</p>`;

const resourcesBlock = ({ db }) => `
    <div>
      <h1>Resources</h1>
      ${Object.keys(db).length ? resourceList({ db }) : noResources()}
    </div>
  `;

const resourcesDiv = document.getElementById('resources');
const customRoutes = document.getElementById('custom-routes');

window
  .fetch('db')
  .then((response) => response.json())
  // @ts-ignore
  .then((db) => (resourcesDiv.innerHTML = resourcesBlock({ db })));

const customRoutesBlock = ({ customRoutes }) => {
  const rules = Object.keys(customRoutes);
  if (rules.length) {
    return `
      <div>
        <h1>Custom Routes</h1>
        <table>
          ${rules
            .map(
              (rule) =>
                `<tr>
              <td>${rule}</td>
              <td><code>⇢</code> ${customRoutes[rule]}</td>
            </tr>`
            )
            .join('')}
        </table>
      </div>
    `;
  }
};

window
  .fetch('__rules')
  .then((response) => response.json())
  .then((customRoutes) => (customRoutes.innerHTML = customRoutesBlock({ customRoutes })));
