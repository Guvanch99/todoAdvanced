export type TTask = {
  id: string,
  status: '0' | '1' | '2',
  priority: '0' | '1' | '2',
  title: string,
  description: string,
  schedule: {
    creation_time: Date | string
  },
  author_name: string
}
