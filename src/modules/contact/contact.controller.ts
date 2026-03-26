import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async findAll() {
    const contacts = await this.contactService.findAll();

    return {
      message: 'Contacts retrieved successfully',
      data: contacts,
    };
  }

  @Get(':id')
  async findOne(id: number) {
    const contact = await this.contactService.findOne(id);
    if (!contact) {
      return {
        message: 'Contact not found',
      };
    }

    return {
      message: 'Contact retrieved successfully',
      data: contact,
    };
  }

  @Post()
  async create(createContactDto: CreateContactDto) {
    const user = await this.contactService.create(createContactDto);

    return {
      message: 'Contact created successfully',
      data: user,
    };
  }

  @Put(':id')
  async update(id: number, updateContactDto: UpdateContactDto) {
    const contact = await this.contactService.update(id, updateContactDto);

    return {
      message: 'Contact updated successfully',
      data: contact,
    };
  }

  @Delete(':id')
  remove(id: number) {
    const contact = this.contactService.remove(id);

    return {
      message: 'Contact deleted successfully',
      data: contact,
    };
  }
}
