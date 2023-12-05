import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ReportType } from 'src/data';

export class createReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}

export class updateReportDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}

export class ReportResponseDto {
  id: string;
  source: string;
  amount: number;
  type: ReportType;

  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this.created_at;
  }
  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<ReportResponseDto>) {
    Object.assign(this, partial);
  }
}
