import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart.tsx'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { SpotifyData } from '@/data/data.ts'

interface UserChartProps {
  spotifyData: SpotifyData[]
}

export default function UserChart({ spotifyData }: UserChartProps) {
  const chartData = spotifyData.reduce(
    (acc, { submittedBy }) => {
      const user = acc.find((user) => user.name === submittedBy)
      if (user) {
        user.Spillelister += 1
      } else {
        acc.push({ name: submittedBy.toString(), Spillelister: 1 })
      }
      return acc
    },
    [] as { name: string; Spillelister: number }[]
  )

  const chartConfig: ChartConfig = {
    desktop: {
      label: 'Spillelister',
      color: 'rgb(253 224 71 / 0.9)',
    },
  }

  chartData.sort((a, b) => b.Spillelister - a.Spillelister)

  return (
    <div className='max-w-2xl lg:max-w-2xl mx-auto my-2 lg:my-14'>
      <ChartContainer config={chartConfig} className='hidden sm:block min-h-[100px] h-1/5 w-full'>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey='name' tickLine={false} tickMargin={1} axisLine={false} />
          <YAxis
            tickCount={chartData[0].Spillelister + 2}
            tickLine={true}
            tickMargin={1}
            axisLine={false}
            allowDecimals={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey='Spillelister'
            fill='var(--color-desktop)'
            radius={4}
            stroke='black'
            strokeWidth={2}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
