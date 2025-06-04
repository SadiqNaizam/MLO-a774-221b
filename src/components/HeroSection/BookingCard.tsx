import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { format } from 'date-fns';
import { CalendarDays, ChevronDown, Pencil, Users2 } from 'lucide-react';

interface BookingCardProps {
  className?: string;
}

const BookingCard: React.FC<BookingCardProps> = ({ className }) => {
  const [checkInDate, setCheckInDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 11) // Feb 11 of current year
  );
  const [checkOutDate, setCheckOutDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 2, 25) // Mar 25 of current year
  );
  const [guests, setGuests] = React.useState<string>('2');

  const handleCheckInDateSelect = (date: Date | undefined) => {
    setCheckInDate(date);
    // Optional: Ensure check-out date is after check-in date
    if (date && checkOutDate && date >= checkOutDate) {
      setCheckOutDate(undefined);
    }
  };

  const handleCheckOutDateSelect = (date: Date | undefined) => {
    setCheckOutDate(date);
  };

  return (
    <Card className={cn(
      'w-full max-w-sm p-6 rounded-xl shadow-2xl',
      'bg-slate-800/80 backdrop-blur-md text-gray-100 border-slate-700',
      className
    )}>
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Evergreen Pine Family Lodge</h3>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Pencil className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal h-12 px-3',
                  'bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 text-white',
                  !checkInDate && 'text-muted-foreground'
                )}
              >
                <CalendarDays className="mr-2 h-4 w-4 text-gray-400" />
                {checkInDate ? format(checkInDate, 'MMM dd') : <span>Pick a date</span>}
                <ChevronDown className="ml-auto h-4 w-4 text-gray-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-700" align="start">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={handleCheckInDateSelect}
                disabled={(date) => date < new Date(new Date().setHours(0,0,0,0)) || (checkOutDate ? date >= checkOutDate : false)}
                initialFocus
                className="text-white"
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal h-12 px-3',
                  'bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 text-white',
                  !checkOutDate && 'text-muted-foreground'
                )}
              >
                <CalendarDays className="mr-2 h-4 w-4 text-gray-400" />
                {checkOutDate ? format(checkOutDate, 'MMM dd') : <span>Pick a date</span>}
                <ChevronDown className="ml-auto h-4 w-4 text-gray-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-700" align="start">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={handleCheckOutDateSelect}
                disabled={(date) => checkInDate ? date <= checkInDate : date < new Date(new Date().setHours(0,0,0,0))}
                initialFocus
                className="text-white"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
            <div className='bg-slate-700/50 p-3 rounded-md border border-slate-600'>
                <p className="text-gray-400">Check-in</p>
                <p className="font-medium text-white">After 2:00 PM</p>
            </div>
            <div className='bg-slate-700/50 p-3 rounded-md border border-slate-600'>
                <p className="text-gray-400">Check-out</p>
                <p className="font-medium text-white">Until 12:00 PM</p>
            </div>
        </div>

        <div className="mb-6">
            <p className="text-xs text-gray-400 mb-1">Guests</p>
            <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="w-full h-12 px-3 bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 text-white focus:ring-accent">
                    <Users2 className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    {[1, 2, 3, 4, 5].map(num => (
                        <SelectItem key={num} value={String(num)} className="focus:bg-slate-700">
                            {num} guest{num > 1 ? 's' : ''}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>

        <div className="flex items-center justify-between mb-1">
          <p className="text-2xl font-bold text-white">$359<span className="text-sm font-normal text-gray-400">/night</span></p>
          <span className="text-sm text-gray-300">2-5 guests</span>
        </div>
        
        <Button 
            variant="default" 
            className="w-full h-12 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-accent"
            onClick={() => console.log('Reserve clicked', { checkInDate, checkOutDate, guests })}
        >
          Reserve
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
