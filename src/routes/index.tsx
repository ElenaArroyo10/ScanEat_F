import { createFileRoute,Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Log in</div>
      <Link to="/login">
        <button>
          Iniciar Sesión
        </button>
      </Link>
    </>
  )
}
