export default function ProjectItem({ project}) {
  function handleClick() {
    if (project.link) window.open(project.link, '_blank');
  }

  return (
    <li onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={project.image.src} alt={project.title} className="aspect-[1/1.33] object-center object-cover rounded-lg shadow-lg mb-4 sm:mb-0 sm:mr-4" />
      <div className="p-1 sm:p-2">
        <h2 className="text-base text-zinc-100">{project.title}</h2>
        <p className="text-sm text-zinc-400 text-balance">{project.description}</p>
      </div>
    </li>
  );
}
