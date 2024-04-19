function Card({ children, rounded, flat }) {
  return (
    <article
      class="bg-white p-4"
      classList={{ "rounded-md": rounded, "shadow-md": !flat }}
    >
      {children}
    </article>
  );
}

export default Card;
