import { createFileRoute } from '@tanstack/react-router'
import UnexpectedIssueFormV from '../components/authentication/UnexpectedIssueFormV'

export const Route = createFileRoute('/unexpectedIssueV')({
  component: RouteComponent,
})

function RouteComponent() {
  return <UnexpectedIssueFormV/>
}
