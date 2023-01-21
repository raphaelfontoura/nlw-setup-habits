import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';

interface HabitDayProps {
  completed: number
}

export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className='w-10 h-10 bg-zinc-900 border-zinc-800 rounded-lg' />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='font-semibold text-zinc-400'>sábado</span>
          <span className='mt1 font-extrabold leading-tight text-3xl'>21/01</span>
          <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <ProgressBar progress={30} />
          </div>
          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
