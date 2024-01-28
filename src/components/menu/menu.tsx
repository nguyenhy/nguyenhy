import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useContent, Link, useLocation } from "@builder.io/qwik-city";
import styles from "./menu.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const { menu } = useContent();
  const loc = useLocation();

  return (
    <aside class="menu">
      {menu
        ? menu.items?.map((item) => (
            <>
              <h5>{item.text}</h5>
              <ul>
                {item.items?.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      class={{
                        "is-active": loc.url.pathname === item.href,
                      }}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))
        : null}
    </aside>
  );
});
