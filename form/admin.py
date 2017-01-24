from django.contrib import admin
from django.http import HttpResponse
from .models import Response

def export_csv(modeladmin, request, queryset):
    import csv
    from django.utils.encoding import smart_str
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename=responses.csv'
    writer = csv.writer(response, csv.excel)
    response.write(u'\ufeff'.encode('utf8')) # BOM (optional...Excel needs it to open UTF-8 file properly)
    writer.writerow([
        smart_str(u"Position"),
        smart_str(u"Facility"),
        smart_str(u"Location"),
        smart_str(u"Clinic Name"),
        smart_str(u"Opening"),
        smart_str(u"Mid-shift"),
        smart_str(u"Breaks"),
        smart_str(u"Sick"),
        smart_str(u"Closing"),
        smart_str(u"Name"),
        smart_str(u"Email")
    ])
    for obj in queryset:
        writer.writerow([
            smart_str(obj.position),
            smart_str(obj.facility),
            smart_str(obj.location),
            smart_str(obj.clinic_name),
            smart_str(obj.opening),
            smart_str(obj.mid),
            smart_str(obj.breaks),
            smart_str(obj.sick),
            smart_str(obj.closing),
            smart_str(obj.name),
            smart_str(obj.email)
        ])
    return response

export_csv.short_description = u"Export CSV"

class ResponseAdmin(admin.ModelAdmin):
    actions = [export_csv]

# Register your models here.
admin.site.register(Response, ResponseAdmin)
