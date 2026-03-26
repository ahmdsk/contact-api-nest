import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ok } from 'src/common/utils/response';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async findAll() {
    const contacts = await this.contactService.findAll();

    return ok(contacts, 'Contacts retrieved successfully');
  }

  @Get(':id')
  async findOne(id: number) {
    const contact = await this.contactService.findOne(id);
    if (!contact) {
      return {
        message: 'Contact not found',
      };
    }

    return ok(contact, 'Contact retrieved successfully');
  }

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    const user = await this.contactService.create(createContactDto);

    return ok(user, 'Contact created successfully');
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    const contact = await this.contactService.update(id, updateContactDto);

    return ok(contact, 'Contact updated successfully');
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const contact = await this.contactService.remove(id);

    return ok(contact, 'Contact deleted successfully');
  }
}
