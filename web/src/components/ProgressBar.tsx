import React from 'react'

interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {

  return (
    <div
      role='progressbar'
      aria-label='Progresso de hábito completados nesse dia'
      aria-aria-valuenow={props.progress}
      className='h-3 rounded-xl bg-violet-600'
      style={{ width: `${props.progress}%` }}
    />
  )
}
