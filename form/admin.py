from django.contrib import admin
from django.http import HttpResponse
from .models import Response

def export_csv(modeladmin, request, queryset):
    import csv
    from django.utils.encoding import smart_str
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename=mymodel.csv'
    writer = csv.writer(response, csv.excel)
    response.write(u'\ufeff'.encode('utf8')) # BOM (optional...Excel needs it to open UTF-8 file properly)
    writer.writerow([
        smart_str(u"position"),
        smart_str(u"facility"),
        smart_str(u"location"),
        smart_str(u"opening"),
        smart_str(u"breaks"),
        smart_str(u"sick"),
        smart_str(u"closing"),
        smart_str(u"name"),
        smart_str(u"email")
    ])
    for obj in queryset:
        writer.writerow([
            smart_str(obj.position),
            smart_str(obj.facility),
            smart_str(obj.location),
            smart_str(obj.opening),
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


